const ProfileCard = ({ user }) => {
  if (!user) return null;

  return (
    <div className="profile-card">
      <img
        src={user.avatar}   // ✅ THIS IS CORRECT
        alt="avatar"
        className="avatar"
      />

      <h3>@{user.username}</h3>
      <p>{user.bio}</p>
      <p>Followers: {user.followers}</p>
      <p>Following: {user.following}</p>
      <p>Repos: {user.publicRepos}</p>
    </div>
  );
};

export default ProfileCard;