import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'Let Me Oh', duration: '3:23'},
        { title: 'Be a King', duration: '5:34'},
        { title: 'I Want it That Way', duration: '3:48'},
        { title: 'Rap Do Silva', duration: '3:55'}
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});