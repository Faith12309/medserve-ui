import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';

export default function CreateStaff() {

    const { data, setData, post, processing, reset } = useForm({
        name: '',
        email: '',
        password: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post('/admin/create-staff', {
            onSuccess: () => {
                alert('Staff created successfully!');
                reset();
            },
        });
    };

    return (
        <AuthenticatedLayout>
            <Head title="Create Staff" />

            <div className="p-6">
                <h1 className="text-5xl font-bold mb-6">
                    Create Staff Account
                </h1>

                <form onSubmit={submit} className="space-y-4">

                    <input
                        type="text"
                        placeholder="Name"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        className="border p-3 w-full"
                    />

                    <input
                        type="email"
                        placeholder="Email"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        className="border p-3 w-full"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
                        className="border p-3 w-full"
                    />

                    <button
                        type="submit"
                        disabled={processing}
                        className="bg-blue-500 text-white px-6 py-3 rounded"
                    >
                        Create Staff
                    </button>

                </form>
            </div>
        </AuthenticatedLayout>
    );
}