import { useState } from "react";
import ChooseService from "../Components/ChooseService";

function Subscribe() {
    const [homeCooking, setHomeCooking] = useState(false);
    const [homeCleaning, setHomeCleaning] = useState(false);
    const [both, setBoth] = useState(false);
    const [ chooseShow, chooseSetShow] = useState(true)
    const [subscriptionData, setSubscriptionData] = useState(
        {
            subscriptionType: "",
            subscriptionDetails: "",
            homeKeeperDetails: "",
        }
    )

	return (
		<>
            <ChooseService
                homeCleaning = {homeCleaning}
                homeCooking={homeCooking}
                setHomeCleaning ={setHomeCleaning}
                setHomeCooking={setHomeCooking}
                setBoth={setBoth}
                chooseShow={chooseShow}
                chooseSetShow = {chooseSetShow}
                subscriptionData={subscriptionData}
                setSubscriptionData={setSubscriptionData}
            />

		</>
	);
}

export default Subscribe;
