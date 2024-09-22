import ApiForm from '@/components/apiForm'
// import Image from 'next/image'

export default function Home() {
    return (
        <main className='flex min-h-screen flex-col items-center justify-center p-6 bg-[#5e52ba]'>
            <div className='text-6xl font-extrabold text-[#ffffff] mb-8'>
                RA2111003011861
            </div>
            <div className='w-full max-w-lg p-4 bg-[#ffffff50] backdrop-blur-sm rounded-lg shadow-lg'>
                <ApiForm />
            </div>
        </main>
    )
}
