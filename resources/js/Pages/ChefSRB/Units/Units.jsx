import React ,{useState} from 'react'
import Table from '../../../Components/table/Table';
import SearchContainer from '@/Components/container/SearchContainer';
import MainContainer from '../../../Components/container/MainContainer';
import TitleContainer from '../../../Components/container/TitleContainer';
import { Info, PencilLine } from 'lucide-react';

function Units({open_close_new}) {

    const headers= ['name' , 'age' , 'salary' , 'email'];
    const contents = [
        {name : 'name' , age:'age' , salary:'salary' , email:'mail'},
        {name : 'a' , age:'1' , salary:'1' , email:'mail1'},
        {name : 'name2' , age:'age2' , salary:'salary2' , email:'mail2'},
        {name : 'name3' , age:'age3' , salary:'salary3' , email:'mail3'},
        {name : 'name4' , age:'age4' , salary:'salary4' , email:'mail4'},
        {name : 'name2' , age:'age2' , salary:'salary2' , email:'mail2'},
        {name : 'name3' , age:'age3' , salary:'salary3' , email:'mail3'},
        {name : 'name4' , age:'age4' , salary:'salary4' , email:'mail4'},
        {name : 'name2' , age:'age2' , salary:'salary2' , email:'mail2'},
        {name : 'name3' , age:'age3' , salary:'salary3' , email:'mail3'},
        {name : 'name4' , age:'age4' , salary:'salary4' , email:'mail4'},
        {name : 'name2' , age:'age2' , salary:'salary2' , email:'mail2'},
        {name : 'name3' , age:'age3' , salary:'salary3' , email:'mail3'},
        {name : 'name4' , age:'age4' , salary:'salary4' , email:'mail4'},
        {name : 'name2' , age:'age2' , salary:'salary2' , email:'mail2'},
        {name : 'name3' , age:'age3' , salary:'salary3' , email:'mail3'},
        {name : 'name4' , age:'age4' , salary:'salary4' , email:'mail4'},
        {name : 'name2' , age:'age2' , salary:'salary2' , email:'mail2'},
        {name : 'name3' , age:'age3' , salary:'salary3' , email:'mail3'},
        {name : 'name4' , age:'age4' , salary:'salary4' , email:'mail4'},
        {name : 'name2' , age:'age2' , salary:'salary2' , email:'mail2'},
        {name : 'name3' , age:'age3' , salary:'salary3' , email:'mail3'},
        {name : 'name4' , age:'age4' , salary:'salary4' , email:'mail4'},
        {name : 'name2' , age:'age2' , salary:'salary2' , email:'mail2'},
        {name : 'name3' , age:'age3' , salary:'salary3' , email:'mail3'},
        {name : 'name4' , age:'age4' , salary:'salary4' , email:'mail4'},
        {name : 'name2' , age:'age2' , salary:'salary2' , email:'mail2'},
        {name : 'name3' , age:'age3' , salary:'salary3' , email:'mail3'},
        {name : 'name4' , age:'age4' , salary:'salary4' , email:'mail4'},
    ]

    const actions=[
        {
            label:'deteils',
            icon:<Info size={19}/>,
            style:' text-gray-700 px-2',
        },
        {
            label:'deteils',
            icon:<PencilLine size={19}/>,
            style:' text-gray-700 px-2',
        }
    ]


  return (
    <>
        <MainContainer>
            <TitleContainer>Work Units : </TitleContainer>
            <SearchContainer>
                <div className='flex flex-row justify-end w-full'>
                    <div className='flex flex-row   '>
                        <div>Filters</div>
                        <div className='ml-5'>
                            <input type="text" className='h-8' />
                            <button>
                                search
                            </button>
                        </div>
                    </div>
                </div>
            </SearchContainer>
            <Table headers={headers} items={contents} actions={actions} setAdd={open_close_new} />
        </MainContainer>

    </>
  )
}

export default Units
