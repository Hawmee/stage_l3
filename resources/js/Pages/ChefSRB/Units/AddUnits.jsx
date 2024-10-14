import React from "react";
import { Cross, X } from "lucide-react";
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';

function AddUnits({ newItem, open_close_new }) {
    return (
        <>
            <div
                className={`parent w-[100vw] h-[100vh] fixed flex flex-col justify-center items-center bg-black bg-opacity-50 z-[12] overflow-auto top-0 backdrop-blur py-12 ${
                    newItem ? "" : "hidden"
                }`}
            >
                <div className="parent relative flex flex-col justify-center items-center rounded-[15px]  bg-white  ">
                    <div className=" absolute top-0 right-0 main bg-red-500 text-white rounded-[12px] text-[2px] mr-[5px] mt-[5px] cursor-pointer hover:bg-red-600">
                        <button
                            onClick={open_close_new}
                            className="p-[2px] flex justify-center items-center"
                        >
                            <X size={14} />
                        </button>
                    </div>
                    <div className="min-w-[32vh] min-h-[42vh] flex flex-col py-4 px-10">
                        <h1 className="text-center text-[18px] font-[700] text-gray-600">New Unit</h1>
                        <form className='mt-8 w-72'>
                            <div>
                                <InputLabel
                                    htmlFor="matricule"
                                    value="Unit Name:"
                                />

                                <TextInput
                                    id="matricule"
                                    name="matricule"
                                    className="mt-1 block w-full"
                                    autoComplete="matricule"
                                    isFocused={true}
                                />

                                {/* <InputError
                                    message={errors.matricule}
                                    className="mt-2"
                                /> */}
                            </div>
                            <div className='mt-4'>
                                <InputLabel
                                    htmlFor="matricule"
                                    value="Unit Name:"
                                />

                                <TextInput
                                    id="matricule"
                                    name="matricule"
                                    className="mt-1 block w-full"
                                    autoComplete="matricule"
                                    isFocused={true}
                                />

                                {/* <InputError
                                    message={errors.matricule}
                                    className="mt-2"
                                /> */}
                            </div>
                            <div className='mt-4'>
                                <InputLabel
                                    htmlFor="matricule"
                                    value="Unit Name:"
                                />

                                <TextInput
                                    id="matricule"
                                    name="matricule"
                                    className="mt-1 block w-full"
                                    autoComplete="matricule"
                                    isFocused={true}
                                />

                                {/* <InputError
                                    message={errors.matricule}
                                    className="mt-2"
                                /> */}
                            </div>
                            <div className='mt-6 flex flex-row justify-end text-white'>
                                    <button className='bg-gray-600 w-16 rounded-[8px] hover:bg-gray-700 py-[2px]' type='button' onClick={open_close_new} >cancel</button>
                                    <button className='bg-blue-500 rounded-[8px] w-16 ml-2 hover:bg-blue-600'>add</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddUnits;
