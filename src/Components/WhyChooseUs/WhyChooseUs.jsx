import { ShieldCheck, Clock, Users } from "lucide-react";

const WhyChooseUs = () => {
  return (
    <div className="max-w-7xl mx-auto my-20 text-center">
      <h2 className="text-xl md:text-2xl lg:text-4xl font-medium mb-4 md:mb-10 text-center text-primary">
        Why Choose Us?
      </h2>
      <p className="text-gray-500 mb-10 max-w-xl mx-auto">
        Discover why thousands trust our Lost & Found platform to reconnect them
        with their lost valuables.
      </p>

      <div className="grid md:grid-cols-3 gap-4 md:gap-6 xl:gap-8">
        <div className="bg-white p-6 border border-secondary rounded-xl shadow hover:shadow-lg transition-all">
          <ShieldCheck className="text-blue-600 w-12 h-12 mx-auto mb-4" />
          <h3 className="text-xl md:text-2xl font-semibold mb-2">
            Safe & Verified
          </h3>
          <p className="text-gray-600">
            Every recovery is securely verified to ensure your belongings are
            returned to the rightful owner.
          </p>
        </div>

        <div className="bg-white p-6 border border-secondary rounded-xl shadow hover:shadow-lg transition-all">
          <Clock className="text-green-600 w-12 h-12 mx-auto mb-4" />
          <h3 className="text-xl md:text-2xl font-semibold mb-2">Fast Response</h3>
          <p className="text-gray-600">
            Immediate notifications and quick communication help recover items
            faster than ever.
          </p>
        </div>

        <div className="bg-white p-6 border border-secondary rounded-xl shadow hover:shadow-lg transition-all">
          <Users className="text-purple-600 w-12 h-12 mx-auto mb-4" />
          <h3 className="text-xl md:text-2xl font-semibold mb-2">Trusted Community</h3>
          <p className="text-gray-600">
            Built on trust, honesty, and community-driven action to reunite lost
            items with their owners.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
