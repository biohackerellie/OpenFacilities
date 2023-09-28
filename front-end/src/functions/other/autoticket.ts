export default async function autoTicket(reservation: any) {
  let ticket = false;

  let data = {
    summary: `A Facility Reservation that requires unlocked doors, ${reservation.eventName} , at ${reservation.Facility.building}  has been approved`,
    description: `Visit https://facilities.laurel.k12.mt.us/admin/reservations/${reservation.id} to view the details \n \n Additional details: ${reservation.doorDetails}`,
    department: 'IT',
  };
  {
    const formData = JSON.stringify(data);
    await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/jira`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: formData,
    });
  }
}
