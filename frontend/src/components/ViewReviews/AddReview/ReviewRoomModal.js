import "./ReviewRoomModal.css";
import React, { Component } from "react";
import { Button } from "../../Button";
import { Autocomplete, Textarea, Slider } from "@mantine/core";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Compress from "browser-image-compression";

export default class ReviewRoomModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      compressing: false,
      submitting: false,
      storage: getStorage(),
      fileTypeError: false,
    };
  }

  compressFile = async (file) => {
    // Compression config
    const options = {
      // As the key specify the maximum size
      // Leave blank for infinity
      maxSizeMB: 0.01,
      maxWidthOrHeight: 1920,
      // Use webworker for faster compression with
      // the help of threads
      useWebWorker: true,
    };

    // Initialize compression
    // First argument is the file object from the input
    // Second argument is the options object with the
    // config
    const compressedBlob = await Compress(file, options);
    // Convert to file
    compressedBlob.lastModifiedDate = new Date();
    const convertedBlobFile = new File([compressedBlob], file.name, {
      type: file.type,
      lastModified: Date.now(),
    });
    return convertedBlobFile;
  };

  makeid(length) {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  uploadPictures = async (files, roomCode) => {
    var count = this.makeid(5);
    var fileLinks = [];
    for (const file of files) {
      const compressed = await this.compressFile(file);
      const storageRef = ref(
        this.state.storage,
        `${this.props.college}-${roomCode}-${count}`
      );
      await uploadBytes(storageRef, compressed);
      const fileUrl = await getDownloadURL(storageRef);
      fileLinks.push(fileUrl);
      count++;
    }
    return fileLinks;
  };

  roomCodeIsValid = (code) => {
    for (const roomCode of this.props.roomNames) {
      if (code === roomCode) return true;
    }
    return false;
  };

  pictureFileFormatsValid = (pictures) => {
    for (const pic of pictures) {
      const ext = pic.name.split(".").pop().toLowerCase();

      if (ext === "png" || ext === "jpg" || ext === "jpeg") continue;

      this.setState({ fileTypeError: true });
      return false;
    }
    return true;
  };

  handleAddReview = async (e) => {
    e.preventDefault();

    if (!this.roomCodeIsValid(e.target.roomCode.value)) return;

    if (!this.pictureFileFormatsValid(e.target.roomPictures.files)) return;

    this.setState({ compressing: true });

    //send pictures to firebase
    const fileLinks = await this.uploadPictures(
      e.target.roomPictures.files,
      e.target.roomCode.value
    );

    this.setState({ compressing: false, submitting: true });

    this.props.handleAddReview({
      roomCode: e.target.roomCode.value,
      sw: e.target.sw.value,
      rec: e.target.rec.value,
      noise: e.target.noise.value / 20,
      size: e.target.size.value / 20,
      roomPictures: fileLinks,
    });

    this.setState({ submitting: false });
  };

  render() {
    if (this.state.compressing) {
      return (
        <div>
          <div>Thank you for submitting a review!</div>
          <div>Compressing Pictures...</div>
        </div>
      );
    } else if (this.state.submitting) {
      return <div>Uploading Review...</div>;
    }
    return (
      <div className="submit-review-container">
        <div className="submit-review-form-container">
          <form onSubmit={this.handleAddReview}>
            <div className="picture-upload-container">
              <label for="roomPictures">Upload Pictures of your room:</label>
              <input
                multiple
                type="file"
                id="roomPictures"
                name="roomPictures"
                accept="image/png, image/jpeg"
              />
              {this.state.fileTypeError ? "only png and jpg allowed" : ""}
            </div>

            <Autocomplete
              onFocus={(event) =>
                event.target.setAttribute("autocomplete", "off")
              }
              name="roomCode"
              label="Pick out Your Room"
              placeholder="Rooms"
              data={this.props.roomNames}
            />
            <Textarea
              name="sw"
              placeholder="..."
              label="Strengths/Weaknesses"
              autosize
              minRows={2}
              required
            />
            <Textarea
              name="rec"
              placeholder="..."
              label="Recommend?"
              autosize
              minRows={2}
              required
            />
            <div>
              Noise
              <Slider
                name="noise"
                label={(value) => `${value / 20}`}
                step={20}
                defaultValue={40}
                marks={[
                  { value: 0, label: "0" },
                  { value: 20, label: "1" },
                  { value: 40, label: "2" },
                  { value: 60, label: "3" },
                  { value: 80, label: "4" },
                  { value: 100, label: "5" },
                ]}
              />
              <br />
            </div>
            <div>
              Size
              <Slider
                name="size"
                label={(value) => `${value / 20}`}
                step={20}
                defaultValue={40}
                marks={[
                  { value: 0, label: "0" },
                  { value: 20, label: "1" },
                  { value: 40, label: "2" },
                  { value: 60, label: "3" },
                  { value: 80, label: "4" },
                  { value: 100, label: "5" },
                ]}
              />
              <br />
            </div>
            <Button
              buttonStyle="btn--primary"
              buttonSize="btn--large"
              className="register-button"
              type="submit"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    );
  }
}
