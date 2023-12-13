import { useNavigate } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import BookIcon from '@mui/icons-material/Book';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import PersonIcon from '@mui/icons-material/Person';

export const SideNav = () => {
  let navigate = useNavigate();
  const onRouteClick = (path) => {
    navigate(path);
  };
  return (
    <aside class="sidebar">
      <nav class="nav">
        <div
          onClick={() => {
            onRouteClick("");
          }}
        >
          <HomeIcon/>
        </div>
        <div
          onClick={() => {
            onRouteClick("pages");
          }}
        >
          <ImageSearchIcon/>
        </div>
        <div
          onClick={() => {
            onRouteClick("images");
          }}
        >
          <ImageSearchIcon/>
        </div>
        <div
          onClick={() => {
            onRouteClick("blogs");
          }}
        >
          <BookIcon/>
        </div>
        <div
          onClick={() => {
            onRouteClick("config");
          }}
        >
          <PowerSettingsNewIcon/>
        </div>
        <div
          onClick={() => {
            onRouteClick("users");
          }}
        >
          <PersonIcon/>
        </div>
      </nav>
    </aside>
  );
};
