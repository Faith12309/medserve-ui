import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Dashboard() {

    const { auth } = usePage().props;
    const user = auth.user;

    return (
        <AuthenticatedLayout>

            <Head title="Dashboard" />

            <div className="min-h-screen flex items-center justify-center bg-gray-100">

                <div className="bg-white p-10 rounded-xl shadow-md text-center">

                    <h1 className="text-3xl font-bold mb-2">
                        Welcome {user.name}
                    </h1>

                    <p className="text-gray-600 mb-6">
                        Role: {user.role}
                    </p>

                    <Link
                        href={route('logout')}
                        method="post"
                        as="button"
                        className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg"
                    >
                        Log Out
                    </Link>

                </div>

            </div>

        </AuthenticatedLayout>
    );
}