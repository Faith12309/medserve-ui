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

                <h1 className="text-4xl font-bold mb-4">
                    Welcome {user.name}
                </h1>

                <p className="text-xl mb-6">
                    Role: {user.role}
                </p>

                {user.role === 'admin' && (
                    <div className="bg-blue-100 p-5 rounded-lg mb-6">

                        <h2 className="font-bold text-2xl">
                            Admin Panel
                        </h2>

                        <p className="mb-4">
                            Only admins can see this.
                        </p>

                        <Link
                            href="/admin/create-staff"
                            className="bg-blue-500 text-white px-5 py-2 rounded"
                        >
                            Create Staff
                        </Link>

                    </div>
                )}

                <button
                    onClick={handleLogout}
                    className="bg-red-500 text-white px-5 py-2 rounded"
                >
                    Logout
                </button>

            </div>

        </AuthenticatedLayout>
    );
}