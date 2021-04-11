import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getUsers } from './redux/actions/usersActions';

const App = () => {
    const { data } = useSelector((state) => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);
    return (
        <p>
            Hello World!)
        </p>
    );
};

export default App;