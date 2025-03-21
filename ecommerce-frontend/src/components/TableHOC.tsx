import {useTable, Column, TableOptions} from "react-table"

function TableHOC<T extends {}>(columns: Column<T>[], data:T[], containerClassname: string, heading:string){
    return function HOC(){
        const options:TableOptions<T> ={
            columns,
            data
        }
        const {getTableBodyProps, getTableProps, headerGroups, rows, prepareRow} = useTable()
        return <div className={containerClassname}>
            <h2 className="heading">{heading}</h2>
            <table className="table" {...getTableProps()}>
                <thead>
                    {
                        headerGroups.map((header)=>(
                            <tr>{}</tr>
                        ))
                    }
                </thead>
                <tbody></tbody>
            </table>
        </div>
    }
}

export default TableHOC