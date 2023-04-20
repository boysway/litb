import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { FiEdit } from "react-icons/fi";
import { FaPhoneAlt, FaUser } from "react-icons/fa";
import { MdEmail, MdOutlineMyLocation } from "react-icons/md";
import { GiTwoCoins } from "react-icons/gi";

import { StyledProfile } from "./style";
import { GiEarthAmerica } from "react-icons/gi";
import BiButton from "../../components/BiButton";
import { getColors } from "../../util/assets";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

import { authUser, axiosUtil } from "../../util/helper";
import Loading from "../../components/Loading";

const { primary, dark_primary, white } = getColors;

const Profile = () => {
  const [cookies, setCookies, removeCookie] = useCookies(["token"]);
 
  const [loading, setLoading] = useState(false);
  const [user, setUser] =  useState({
    userFirstName:"",
    userLastName:"",
    email:"",
    wallet:"",
    phoneNumber:"",
    country:"",
    state:"",
    pref:"",
    userName:"",
    postal:""


  })
  const navigate = useNavigate();

 
  useEffect(() => {
   
    setLoading(true);
    if (!cookies.token) {
      removeCookie("token", { path: "/" });
      navigate("/");
    }

    authUser(cookies.token)
      .then((data) => {
        if (!data || data.data.message.title === "bad") {
          removeCookie("token", { path: "/" });
          navigate("/");
        }

        if (data.data.message.description === "toProcess") {
          navigate("/process");
        }

        if (data.data.message.description === "toVerify") {
          navigate("/email/verify");
        }

        setUser(data.data.user)
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false)
        removeCookie("token", { path: "/" });
        navigate("/");
      });
  }, [cookies.token, removeCookie]);

  
  return (
    <StyledProfile>
      <div className="pro">
        <Card sx={{ minWidth: 275 }} className="user_data">
          <CardContent>
            <p className="edit_title">Personal Data</p>
            <div className="dtl">
              <span className="name">{user.userFirstName+"  "+user.userLastName}</span>
            </div>
            <div className="dtl">
              <span className="ic">
                <MdEmail />
              </span>
              <span>{user.email}</span>
            </div>
            <div className="dtl">
              <span className="ic">
                <FaPhoneAlt />
              </span>
              <span>{user.phoneNumber}</span>
            </div>
            <div className="dtl">
              <span className="ic">
                <GiEarthAmerica />
              </span>
              <span>{user.country}</span>
            </div>
            <div className="dtl">
              <span className="ic">
                <MdOutlineMyLocation />
              </span>
              <span>{user.state+",  "+user.postal}</span>
            </div>
          </CardContent>
          <CardActions>
            <div className="act">
              <FiEdit />
            </div>
          </CardActions>
        </Card>
        <Card sx={{ minWidth: 275 }} className="wall">
          <CardContent>
            <p className="edit_title">Wallet Data</p>
            <div className="dtl">
              <div className="wallet_add">
                {user.wallet}
              </div>
            </div>
            <div className="dtl mst_pf">
              <span className="ic">
                <GiTwoCoins />
              </span>
              <span>{user.pref}</span>
            </div>
          </CardContent>
          <CardActions>
            <div className="act">
              <FiEdit />
            </div>
          </CardActions>
        </Card>
      </div>
      <div className="acc_dtl">
        <div className="recent">
          <List sx={{ width: "100%", maxWidth: 360 }}>
            <p className="edit_title">Recent Buys</p>
            <ListItem alignItems="center">
              <ListItemAvatar
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <FaUser style={{ fontSize: "1.8rem" }} />
              </ListItemAvatar>
              <ListItemText
                primary="Brunch this weekend?"
                secondary={
                  <>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Ali Connors
                    </Typography>
                    {" — I'll be in your neighborhood doing errands this…"}
                  </>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Summer BBQ"
                secondary={
                  <>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      to Scott, Alex, Jennifer
                    </Typography>
                    {" — Wish I could come, but I'm out of town this…"}
                  </>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Oui Oui"
                secondary={
                  <>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Sandra Adams
                    </Typography>
                    {" — Do you have Paris recommendations? Have you ever…"}
                  </>
                }
              />
            </ListItem>
          </List>
          <BiButton bg={primary} hover={dark_primary} color={white}>
            View All
          </BiButton>
        </div>
        <div className="recent">
          <List sx={{ width: "100%", maxWidth: 360 }}>
            <p className="edit_title">Recent Sales</p>
            <ListItem alignItems="center">
              <ListItemAvatar
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <FaUser style={{ fontSize: "1.8rem" }} />
              </ListItemAvatar>
              <ListItemText
                primary="Brunch this weekend?"
                secondary={
                  <>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Ali Connors
                    </Typography>
                    {" — I'll be in your neighborhood doing errands this…"}
                  </>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Summer BBQ"
                secondary={
                  <>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      to Scott, Alex, Jennifer
                    </Typography>
                    {" — Wish I could come, but I'm out of town this…"}
                  </>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Oui Oui"
                secondary={
                  <>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Sandra Adams
                    </Typography>
                    {" — Do you have Paris recommendations? Have you ever…"}
                  </>
                }
              />
            </ListItem>
          </List>
          <BiButton bg={primary} hover={dark_primary} color={white}>
            View All
          </BiButton>
        </div>
        <div className="balance">
          <p className="edit_title">Transactions</p>
          <div className="amounts">
            <p>Successful</p>
            <div className="suc_ful">
              <div className="total_sales">
                <h2>Sales</h2>
                <h2>10</h2>
              </div>
              <div className="total_buys">
                <h2>Purchase</h2>
                <h2>10</h2>
              </div>
            </div>
            <p>Unsuccessful</p>
            <div className="un_suc">
              <div className="bad_sales">
                <h2>Sales</h2>
                <h2>10</h2>
              </div>
              <div className="bad_buys">
                <h2>Purchase</h2>
                <h2>10</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      {loading && <Loading/>}
    </StyledProfile>
  );
};

export default Profile;
