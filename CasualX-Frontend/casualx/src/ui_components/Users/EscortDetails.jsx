import React from "react";
import { useParams } from "react-router-dom";

function EscortDetails() {

    const { id } = useParams(); // Get the profile ID from the URL
    const [profile, setProfile] = React.useState(null);

    React.useEffect(() => {
    // Fetch profile details from the backend
    fetch(`http://localhost:8000/api/profiles/`)
      .then((response) => response.json())
      .then((data) => setProfile(data))
      .catch((error) => console.error("Error fetching profile details:", error));
  }, [id]);

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-8">{profile.display_name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Profile Image */}
        <div>
          <img
            src={`${profile.picture1}`}
            alt={profile.display_name}
            className="w-full h-96 object-cover rounded-lg"
          />
        </div>

        {/* Profile Information */}
        <div className="space-y-4">
          <p>
            <span className="font-bold">Location:</span> {profile.city}, {profile.state}, {profile.country}
          </p>
          <p>
            <span className="font-bold">Gender:</span> {profile.gender}
          </p>
          <p>
            <span className="font-bold">Date of Birth:</span> {profile.date_of_birth}
          </p>
          <p>
            <span className="font-bold">Mobile:</span> {profile.mobile_number}
          </p>
          <p>
            <span className="font-bold">Education:</span> {profile.education}
          </p>
          <p>
            <span className="font-bold">Occupation:</span> {profile.occupation}
          </p>
          <p>
            <span className="font-bold">About:</span> {profile.about}
          </p>
        </div>
      </div>
    </div>
  )
}

export default EscortDetails