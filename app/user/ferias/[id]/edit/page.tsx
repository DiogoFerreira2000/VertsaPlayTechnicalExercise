import Breadcrumbs from '@/app/ui/ferias/breadcrumbs';
 
export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;

    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Appointments', href: '/dashboard/appointments' },
                    {
                        label: 'Edit Appointment',
                        href: `/dashboard/appointments/${id}/edit`,
                        active: true,
                    },
                ]}
            />
        </main>
    );
}