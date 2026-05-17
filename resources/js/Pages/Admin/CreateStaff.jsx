import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, usePage } from '@inertiajs/react';

export default function CreateStaff() {

    const { flash = {}, auth } = usePage().props;

    const user = auth?.user;

    const { data, setData, post, processing, reset, errors } = useForm({
        name: '',
        email: '',
        password: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post('/admin/create-staff', {
            onSuccess: () => {
                reset();
            },
        });
    };

    if (user?.role !== 'admin') {
        return (
            <AuthenticatedLayout>
                <div className="p-6">
                    <div className="bg-red-100 text-red-700 p-4 rounded-lg">
                        Access denied. Admins only.
                    </div>
                </div>
            </AuthenticatedLayout>
        );
    }

    return (
        <AuthenticatedLayout>

            <Head title="Create Staff" />

            <div className="p-6 max-w-2xl">

                <h1 className="text-5xl font-bold mb-2">
                    Create Staff Account
                </h1>

                <p className="text-gray-500 mb-8">
                    Create new staff accounts for nurses and personnel.
                </p>

                {flash.success && (
                    <div className="bg-green-100 border border-green-300 text-green-700 p-4 rounded-lg mb-6">
                        {flash.success}
                    </div>
                )}

                <form
                    onSubmit={submit}
                    className="bg-white shadow-md rounded-xl p-6 space-y-5"
                >

                    <div>
                        <label className="block mb-2 font-medium text-gray-700">
                            Full Name
                        </label>

                        <input
                            type="text"
                            placeholder="Enter full name"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            className="border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 rounded-lg p-3 w-full"
                        />

                        {errors.name && (
                            <div className="text-red-500 text-sm mt-1">
                                {errors.name}
                            </div>
                        )}
                    </div>

                    <div>
                        <label className="block mb-2 font-medium text-gray-700">
                            Email Address
                        </label>

                        <input
                            type="email"
                            placeholder="Enter email address"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            className="border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 rounded-lg p-3 w-full"
                        />

                        {errors.email && (
                            <div className="text-red-500 text-sm mt-1">
                                {errors.email}
                            </div>
                        )}
                    </div>

                    <div>
                        <label className="block mb-2 font-medium text-gray-700">
                            Password
                        </label>

                        <input
                            type="password"
                            placeholder="Enter password"
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            className="border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 rounded-lg p-3 w-full"
                        />

                        {errors.password && (
                            <div className="text-red-500 text-sm mt-1">
                                {errors.password}
                            </div>
                        )}
                    </div>

                    <button
                        type="submit"
                        disabled={processing}
                        className={`w-full text-white px-6 py-3 rounded-lg transition ${
                            processing
                                ? 'bg-gray-400 cursor-not-allowed'
                                : 'bg-blue-500 hover:bg-blue-600'
                        }`}
                    >
                        {processing ? 'Creating Staff Account...' : 'Create Staff'}
                    </button>

                </form>

            </div>

        </AuthenticatedLayout>
    );
}