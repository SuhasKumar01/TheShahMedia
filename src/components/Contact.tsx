import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 font-montserrat dark:text-white">
          Book a Free Discovery Call
        </h2>
        <p className="text-[#888888] dark:text-gray-300 mb-8">
          Let&apos;s discuss how The Shah Media can build your growth engine.
        </p>
        <form className="max-w-xl mx-auto space-y-4">
          <Input type="text" placeholder="Your Name" />
          <Input type="email" placeholder="Your Email" />
          <Textarea placeholder="Tell us about your project" />
          <Button type="submit" size="lg" className="w-full">
            Book Your Call
          </Button>
        </form>
      </div>
    </section>
  );
}