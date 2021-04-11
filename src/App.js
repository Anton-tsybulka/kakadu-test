import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTable } from 'react-table'

import { getUsers } from './redux/actions/usersActions';

const App = () => {
    const { data: list } = useSelector((state) => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

    const data = React.useMemo(
        () => list && list.map(({ name_method, url }) => ({
            col1: name_method,
            col2: url,
        })),
        [list]
    )

    const columns = React.useMemo(
        () => [
            {
                Header: 'Name method',
                accessor: 'col1',
            },
            {
                Header: 'Url',
                accessor: 'col2',
            },
        ],
        []
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data })

    return (
        <table
            {...getTableProps()}
            style={{
                border: 'solid 1px black',
                width: '70%',
                margin: 'auto'
            }}>
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th
                                {...column.getHeaderProps()}
                                style={{
                                    border: 'solid 1px gray',
                                    background: 'aliceblue',
                                    color: 'black',
                                    fontWeight: 'bold',
                                }}
                            >
                                {column.render('Header')}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map(row => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return (
                                    <td
                                        {...cell.getCellProps()}
                                        style={{
                                            padding: '2px',
                                            border: 'solid 1px gray',
                                            background: 'papayawhip',
                                        }}
                                    >
                                        {cell.render('Cell')}
                                    </td>
                                )
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>

    );
};

export default App;