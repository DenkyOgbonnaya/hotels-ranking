import HotelsFilter from "./_components/hotelsFilter";
import HotelList from "./_components/hotelList";
import HotelActions from "./_components/hotelActions";

export default function HomePage() {
  return (
    <div className="page-container flex flex-col gap-4  py-8 lg:py-28 h-dvh">
      <header>
        <h1 className="font-heading text-3xl">Hotels-Ranking</h1>
      </header>

      <div className="flex flex-col lg:flex-row gap-4">
        <aside className=" basis-64 h-full">
          <HotelsFilter />
        </aside>
        <main className="flex flex-1 flex-col gap-4">
          <HotelActions />
          <HotelList />
        </main>
      </div>
    </div>
  );
}
