import { useForm } from '@inertiajs/react';

export default function CreateStaff() {

    const { data, setData, post } = useForm({
        name: '',
        email: '',
        password: '',
    });

    function submit(e) {
        e.preventDefault();
        post('/staff/store');
    }

    return (
        <div className="p-10">

            <h1 className="text-3xl font-bold mb-6">
                Create Staff
            </h1>

            <form onSubmit={submit} className="space-y-4 max-w-md">

                <input
                    type="text"
                    placeholder="Name"
                    value={data.name}
                    onChange={(e) => setData('name', e.target.value)}
                    className="w-full border p-3 rounded-xl"
                />

                <input
                    type="email"
                    placeholder="Email"
                    value={data.email}
                    onChange={(e) => setData('email', e.target.value)}
                    className="w-full border p-3 rounded-xl"
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={data.password}
                    onChange={(e) => setData('password', e.target.value)}
                    className="w-full border p-3 rounded-xl"
                />

                <button
                    className="bg-blue-600 text-white px-6 py-3 rounded-xl"
                >
                    Create Staff
                </button>

            </form>
        </div>
    );
}