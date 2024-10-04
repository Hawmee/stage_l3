import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { useEffect } from 'react';

export default function Register({units}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        last_name:'',
        email: '',
        matricule:'',
        password: '',
        password_confirmation: '',
        user_type:'',
        unit_id:'',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    useEffect(() => {
        if(data.user_type=='isChefSRB'){
            setData('unit_id' , null)
        }
    }, [data.user_type]);

    return (
        <GuestLayout>
            <Head title="Register" />

            <form onSubmit={submit}>

                <div >
                    <InputLabel htmlFor="matricule" value="Matricule" />

                    <TextInput
                        id="matricule"
                        name="matricule"
                        value={data.matricule}
                        className="mt-1 block w-full"
                        autoComplete="matricule"
                        isFocused={true}
                        onChange={(e) => setData('matricule', e.target.value)}
                        required
                    />

                    <InputError message={errors.matricule} className="mt-2" />
                </div>


                <div className="mt-4">
                    <InputLabel htmlFor="name" value="Name" />

                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="last_name" value="Last Name" />

                    <TextInput
                        id="las_name"
                        name="last_name"
                        value={data.last_name}
                        className="mt-1 block w-full"
                        autoComplete="last_name"
                        isFocused={true}
                        onChange={(e) => setData('last_name', e.target.value)}
                        required
                    />

                    <InputError message={errors.last_name} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={(e) => setData('email', e.target.value)}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4 flex flex-row justify-between items-center">

                    <div>
                        <InputLabel htmlFor="user_type" value="Type de compte" />
                        <select name="user_type" id="user_type"
                            value={data.user_type}
                            onChange={(e)=>{
                                setData('user_type',e.target.value)
                            }}
                            required
                            className='rounded-[12px] w-[10vw] mt-2 text-[13px] hover:cursor-pointer'
                        >
                            <option value="" >Type du compte</option>
                            <option value="isChefSRB" className='hover:cursor-pointer'>Chef SRB</option>
                            <option value="isChefUnit">Chef Unité(Division/Bureau)</option>
                            <option value="isPersCellule">Personnel Cellule</option>
                            <option value="isPersSecretariat">Personnel Secretariat</option>
                        </select>

                        <InputError message={errors.user_type} className="mt-2" />
                        </div>



                    <div>
                        <InputLabel htmlFor="unit_id" value="Unité de travail" />
                        <select name="unit_id" id="unit_id"
                            value={data.unit_id}
                            onChange={(e)=>{
                                setData('unit_id',e.target.value)
                            }}
                            required={data.user_type!=='isChefSRB'}
                            className='rounded-[12px] w-[10vw] mt-2 text-[13px] hover:cursor-pointer'
                        >
                            <option value="" >Unité de travail</option>
                            {
                                units&& units.map((units , id)=>(
                                    <>
                                        <option value="" key={units.id}>
                                            {units.name}
                                        </option>
                                    </>
                                ))
                            }
                        </select>

                        <InputError message={errors.unit_id} className="mt-2" />
                    </div>
                </div>




                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData('password', e.target.value)}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel
                        htmlFor="password_confirmation"
                        value="Confirm Password"
                    />

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) =>
                            setData('password_confirmation', e.target.value)
                        }
                        required
                    />

                    <InputError
                        message={errors.password_confirmation}
                        className="mt-2"
                    />
                </div>

                <div className="mt-4 flex items-center justify-end">
                    <Link
                        href={route('login')}
                        className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Already registered?
                    </Link>

                    <PrimaryButton className="ms-4" disabled={processing}>
                        Register
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
