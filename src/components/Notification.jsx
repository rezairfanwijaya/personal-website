import { Notification, Placeholder } from "rsuite";


const NotificationUnderDevelopement = () => {
    return (<>
        <div className="notif flex justify-center absolute inset-x-0 top-5 z-50">
            <Notification closable type="warning" header="warning">
                <Placeholder.Paragraph style={{ width: 230 }} rows={0} />
                <p className="font-bold text-lg">Under Development</p>
            </Notification>
        </div>
    </>);
}

export default NotificationUnderDevelopement;