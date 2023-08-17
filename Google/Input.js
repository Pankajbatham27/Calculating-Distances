import { MapSharp } from '@mui/icons-material';
import { IconButton, ListItem, ListItemButton, ListItemIcon, TextField, Typography } from '@mui/material';
import PlacesAutocomplete from 'react-places-autocomplete';

const Input = ({ address, handleSelect, handleChange, title }) => {
    return (
        <div>
            {/* <h5 style={{margin: '0'}}>{title}</h5> */}
            <PlacesAutocomplete
                value={address}
                onChange={handleChange}
                onSelect={handleSelect}
            >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <div>


                        <TextField {...getInputProps({

                            className: 'location-search-input',
                        })} id="outlined-basic" label={title} variant="outlined" fullWidth sx={{ marginTop: '30px' }} />


                        <div className="autocomplete-dropdown-container">
                            {loading && <div>Loading...</div>}
                            {suggestions.map((suggestion, index) => {
                                const className = suggestion.active
                                    ? 'suggestion-item--active'
                                    : 'suggestion-item';
                                return (
                                    <div
                                        {...getSuggestionItemProps(suggestion, {
                                            className,
                                        })}
                                        key={index}
                                    >
                                        {/* <span></span> */}
                                        <ListItem disablePadding>
                                            <ListItemButton sx={{
                                                '&:hover': {
                                                    backgroundImage: 'linear-gradient(45deg,#3023ae,#f09)',
                                                    color: '#fff'
                                                },
                                            }}>
                                                <ListItemIcon>
                                                    <MapSharp />
                                                </ListItemIcon>
                                                <Typography variant='body2'>{suggestion.description}</Typography>
                                            </ListItemButton>

                                        </ListItem>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </PlacesAutocomplete>
        </div>
    )
}
export default Input;