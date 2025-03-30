'use client';

import Breadcrumbs from '@/app/ui/ferias/breadcrumbs';
 
export default async function Page() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Appointments', href: '/dashboard/appointments' },
          {
            label: 'Create Appointments',
            href: '/dashboard/appointments/create',
            active: true,
          },
        ]}
      />
    </main>
  );
}