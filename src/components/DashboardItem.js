import React, { Fragment, useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { TextField , Button, } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const DashboardItem = ({title, onSearch}) => {

    const [cliente, setCliente] = useState('');

    const loadClient = () => {
        setCliente('demo');
    }

    return (
        <Fragment>
            <h1>{title}</h1>
            <div>
                <TextField />
                <Button variant="contained" color="primary" onClick= {loadClient}>
                    <SearchIcon/>
                </Button>
            </div>
            <div>
                <h1>{cliente}</h1>
            </div>
        </Fragment>
    );
}

DashboardItem.propTypes = {
    title: PropTypes.string.isRequired,
    onSearch: PropTypes.func.isRequired,
}

export default DashboardItem;

//rafc