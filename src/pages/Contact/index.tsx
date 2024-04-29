import useTitle from "../../hooks/useTitle";

function Contact() {
  useTitle();

  return (
    <div className=" mx-auto p-6 bg-white rounded-lg shadow-md my-3 w-1320 w-100">
      <div className="mb-4">
        <p className="font-semibold text-gray-700">Address:</p>
        <p className="text-gray-600">Boğaziçi University</p>
        <p className="text-gray-600">Faculty of Education</p>
        <p className="text-gray-600">
          Computer Education and Educational Technology
        </p>
        <p className="text-gray-600">Bebek - 34342</p>
        <p className="text-gray-600">Istanbul</p>
        <p className="text-gray-600">Türkiye</p>
      </div>
      <div className="mb-4">
        <p className="font-semibold text-gray-700">Email:</p>
        <a
          href="mailto:cet@boun.edu.tr"
          className="text-blue-600 hover:underline"
        >
          cet@boun.edu.tr
        </a>
      </div>
      <div className="mb-4">
        <p className="font-semibold text-gray-700">Phone:</p>
        <p className="text-gray-600">+90 212 359 67 88</p>
      </div>
      <div className="mb-4">
        <p className="font-semibold text-gray-700">Fax:</p>
        <p className="text-gray-600">+90 212 265 97 76</p>
      </div>
    </div>
  );
}

export default Contact;
