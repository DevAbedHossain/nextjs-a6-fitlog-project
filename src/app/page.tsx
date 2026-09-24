import Banner from '@/components/homepage/Banner';
import Library from '@/components/homepage/Library';




const HomePage = async () => {

  return (
    <div className="bg-black">
      <Banner />
      <Library />
    </div>
  );
};

export default HomePage;