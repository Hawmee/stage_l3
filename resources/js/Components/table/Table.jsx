import React from "react";

import "./Table.css";
import {
    CirclePlus,
    CopyPlus,
    DiamondPlus,
    Plus,
    SquarePlus,
} from "lucide-react";

function Table({ headers, items, actions ,setAdd }) {
    const columns = items.length > 0 ? Object.keys(items[0]) : [];

    return (
        <>
            <div className="px-2 pb-2 relative">
                <div className="table_main h-[75vh] border rounded-[12px] shadow-sm overflow-auto ">
                    <table className="table bg-gray-50 text-left  w-full h-full p-[1rem]">
                        <thead className="">
                            <tr className="sticky text-gray-700 bg-gray-200 z-12 top-0 left-0">
                                {headers.map((header, index) => (
                                    <th className="p-[1rem] " key={index}>
                                        {header}
                                    </th>
                                ))}
                                {actions && <th></th>}
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item, index) => (
                                <tr key={index}>
                                    {columns.map((column) => (
                                        <td className="p-4" key={column}>
                                            {item[column]}
                                        </td>
                                    ))}
                                    <td className='flex flex-row items-center justify-center pb-4'>
                                        {actions &&
                                            actions.map(
                                                (action, actionIndex) => (
                                                        <button
                                                            key={actionIndex}
                                                            className={`flex flex-row justify-between items-center text-[14px] ${action.style}`}
                                                        >
                                                            {action.icon}
                                                        </button>
                                                )
                                            )}
                                    </td>
                                </tr>
                            ))}
                            <tr>
                                {columns.map((column, index) => (
                                    <td className="p-[1rem]" key={index}></td>
                                ))}
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="btn_place absolute bottom-0 right-0 pb-2 pr-[8px]">
                    <button className="btn_style flex flex-row items-center justify-center bg-blue-500 px-4 py-1 w-full rounded-tl-[7px] text-gray-100 hover:bg-blue-600 " onClick={setAdd}>
                        <CopyPlus size={17} />
                        <p className="ml-1">Add</p>
                    </button>
                </div>
            </div>
        </>
    );
}

export default Table;
