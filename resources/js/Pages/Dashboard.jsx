import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage, router, Link } from '@inertiajs/react';

export default function Dashboard() {

    const props = usePage().props;

    const user = props.auth?.user;

    const handleLogout = () => {
        router.post(route('logout'));
    };

    if (!user) {
        return (
            <div className="p-6 text-red-500">
                User not loaded.
            </div>
        );
    }

    return (
        <AuthenticatedLayout>

            <Head title="Dashboard" />

            <div className="p-6">

                <h1 className="text-4xl font-bold mb-2">
                    Welcome {user.name}
                </h1>

                <p className="text-gray-600 text-lg mb-8">
                    Role: {user.role}
                </p>

                {user.role === 'admin' && (
                    <div className="bg-blue-100 border border-blue-200 p-6 rounded-xl mb-8 shadow-sm">

                        <h2 className="font-bold text-3xl mb-2 text-blue-900">
                            Admin Panel
                        </h2>

                        <p className="mb-5 text-blue-800">
                            Only admins can create staff accounts.
                        </p>

                        <Link
                            href="/admin/create-staff"
                            className="bg-blue-500 hover:bg-blue-600 transition text-white px-6 py-3 rounded-lg inline-block"
                        >
                            Create Staff
                        </Link>

                    </div>
                )}

                {user.role === 'staff' && (
                    <div className="bg-green-100 border border-green-200 p-6 rounded-xl mb-8 shadow-sm">

                        <h2 className="font-bold text-3xl mb-2 text-green-900">
                            Staff Panel
                        </h2>

                        <p className="text-green-800">
                            Welcome to the MedServe staff dashboard.
                        </p>

                    </div>
                )}

                <button
                    onClick={handleLogout}
                    className="bg-red-500 hover:bg-red-600 transition text-white px-6 py-3 rounded-lg"
                >
                    Logout
                </button>

            </div>

        </AuthenticatedLayout>
    );
}