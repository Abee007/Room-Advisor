import './CardsContainer.css'
import React, { Component } from 'react'
import SuiteCard from './SuiteCard'


export default class CardsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            suites: this.sortSuites(this.props.sort.value)
        };
    }

    updateSuiteFavorited = (e) => {
        // Send to be added/removed from user object
        if(e.favorited) {
            this.props.handleAddFavorited({suiteCode: e.suiteCode, buildingName: e.buildingName});
        } else {
            this.props.handleRemoveFavorited({suiteCode: e.suiteCode, buildingName: e.buildingName});
        }

        for(var suite of this.state.suites) {
            if(suite.suiteCode === e.suiteCode) {
                suite.favorited = e.favorited;
                if(suite.suiteRooms.length === 1) suite.suiteRooms[0].meta.favorited = e.favorited;
                break;
            }
        }
        this.setState({suites: this.state.suites});
    }

    updateRoomFavorited = (e) => {
        if(e.favorited) {
            this.props.handleAddFavorited({suiteCode: e.suiteCode, roomCode: e.roomCode, buildingName: e.buildingName});
        } else {
            this.props.handleRemoveFavorited({suiteCode: e.suiteCode, roomCode: e.roomCode, buildingName: e.buildingName});
        }

        var mySuites = this.state.suites;

        for(var suite of mySuites) {
            if(suite.suiteCode === e.suiteCode) {
                // Update room favorite status
                for(var room of suite.suiteRooms) {
                    if(room.roomCode === e.roomCode) {
                        room.meta.favorited = e.favorited;
                        break;
                    }
                }

                // Update whether or not there is a room in this suite that has been favorited
                if(e.favorited) {
                    suite.favoritedInside = e.favorited;
                } else {
                    var check = false;
                    for(var room of suite.suiteRooms) {
                        if(room.meta.favorited) {
                            check = true;
                            break;
                        }
                    }
                    suite.favoritedInside = check;
                }
            }
        }
        this.setState({suites: mySuites});
    }

    updateYourSort = (e) => {
        const suites = this.sortSuites(e.value);
        this.setState({
            suites
        });
    }

    sortSuites = (sortBy) => {
        if(sortBy === "FL") {
            return this.sortByFloorLevel();

        } else if(sortBy === "BR_SZ") {
            return this.sortByBedroomSize();

        } else if (sortBy === "NOISE") {
            return this.sortByNoise();
        }
        return this.sortBySuiteName();
    }

    sortBySuiteName = () => {
        return this.props.suites.sort((a, b) => {
            if(a.suiteRooms[0].roomCode < b.suiteRooms[0].roomCode) return -1;
            if(a.suiteRooms[0].roomCode > b.suiteRooms[0].roomCode) return 1;
            return 0;
        });
    }

    sortByFloorLevel = () => {
        // Compare the first letter of the room number
        return this.props.suites.sort((a, b) => {
            if(a.suiteRooms[0].roomCode[1] < b.suiteRooms[0].roomCode[1]) return -1;
            if(a.suiteRooms[0].roomCode[1] > b.suiteRooms[0].roomCode[1]) return 1;
            return 0;
        });
    }

    avgBedroomSize = (suite) => {
        var no = 0, sz = 0;
        for(const room of suite.suiteRooms) {
            no++;
            sz += room.meta.size;
        }
        return (sz/no);
    }

    sortByBedroomSize = () => {
        // SortByAvgRoomSize descending
        return this.props.suites.sort((a, b) => {
            const aVal = this.avgBedroomSize(a), bVal = this.avgBedroomSize(b);
            if(aVal < bVal) return 1;
            if(aVal > bVal) return -1;
            return 0;
        });
    }

    avgNoise = (suite) => {
        var no = 0, noise = 0;
        for(const room of suite.suiteRooms) {
            no++;
            noise += room.meta.noise;
        }
        return (noise/no);
    }

    sortByNoise = () => {
        return this.props.suites.sort((a, b) => {
            const aVal = this.avgNoise(a), bVal = this.avgNoise(b);
            if(aVal < bVal) return 1;
            if(aVal > bVal) return -1;
            return 0;
        });
        
    }

    render() {
        return (
            <div className='suitecards-container'>
                {this.state.suites.map((suite) => (
                    <div key={suite.suiteRooms[0].roomCode}><SuiteCard suite={suite} handleFavoritedSuite={this.updateSuiteFavorited} handleFavoritedRoom={this.updateRoomFavorited}/></div>
                ))}
            </div>
        );
    }
}