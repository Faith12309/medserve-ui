import { useEffect } from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, useForm } from '@inertiajs/react';

export default function Login({ status }) {
     const { data, setData, post, processing, errors, reset } = useForm({
    email: '',
    password: '',
});

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route('login'));
    };

    return (
        <div className="flex min-h-screen bg-slate-100 font-sans">
            <Head title="Login - MedServe" />

            {/* LEFT SIDE */}
            <div className="hidden lg:block lg:w-1/2 relative">
                <img
                    src="/images/login.jpg"
                    alt="Barangay Health Center"
                    className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-blue-950/50"></div>

                <div className="absolute inset-0 flex items-center justify-center px-16">
                    <div className="max-w-lg text-white">
                        <h1 className="text-5xl font-bold leading-tight">
                            MedServe
                        </h1>

                        <p className="mt-3 text-blue-200 font-semibold tracking-widest uppercase text-sm">
                            Barangay Nangca Health Center
                        </p>

                        <div className="mt-8 border-l-4 border-blue-400 pl-5">
                            <p className="text-xl leading-relaxed">
                                Secure and centralized healthcare management system for barangay personnel.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex w-full items-center justify-center px-6 py-12 lg:w-1/2">
                <div className="w-full max-w-md rounded-3xl bg-white p-10 shadow-xl">

                    {/* LOGO */}
                    <div className="mb-10 flex items-center gap-4">
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 shadow-lg">
                            <svg
                                className="h-8 w-8 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2.5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 4v16m8-8H4"
                                />
                            </svg>
                        </div>

                        <div>
                            <h1 className="text-3xl font-extrabold text-slate-900">
                                MedServe
                            </h1>

                            <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
                                Barangay Nangca
                            </p>
                        </div>
                    </div>

                    {/* HEADER */}
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-slate-800">
                            MedServe Login
                        </h2>

                        <p className="mt-2 text-sm leading-relaxed text-slate-500">
                            Authorized personnel only.
                        </p>
                    </div>

                    {status && (
                        <div className="mb-4 rounded-lg border border-green-200 bg-green-50 p-3 text-sm font-medium text-green-600">
                            {status}
                        </div>
                    )}

                    {/* FORM */}
                    <form onSubmit={submit} className="space-y-6">

                        {/* EMAIL */}
                        <div>
                            <InputLabel
                                htmlFor="email"
                                value="Email Address"
                                className="mb-2 font-semibold text-slate-700"
                            />

                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="block w-full rounded-xl border-slate-300 bg-slate-50 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500"
                                autoComplete="username"
                                isFocused={true}
                                onChange={(e) => setData('email', e.target.value)}
                                placeholder="Enter your email"
                            />

                            <InputError message={errors.email} className="mt-2" />
                        </div>

                        {/* PASSWORD */}
                        <div>
                            <InputLabel
                                htmlFor="password"
                                value="Password"
                                className="mb-2 font-semibold text-slate-700"
                            />

                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="block w-full rounded-xl border-slate-300 bg-slate-50 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500"
                                autoComplete="current-password"
                                onChange={(e) => setData('password', e.target.value)}
                                placeholder="Enter your password"
                            />

                            <InputError message={errors.password} className="mt-2" />
                        </div>

                       
                        {/* BUTTON */}
                        <PrimaryButton
                            className="flex w-full justify-center rounded-xl bg-blue-600 px-4 py-3 text-sm font-bold text-white transition hover:bg-blue-700"
                            disabled={processing}
                        >
                            {processing ? 'Signing in...' : 'Login'}
                        </PrimaryButton>
                    </form>
                </div>
            </div>
        </div>
    );
}