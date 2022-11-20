import { Notification, Placeholder } from 'rsuite';

const NotificationUnderDevelopment = () => {
    return (<>
        <Notification closable type="info" header="Informational">
            <Placeholder.Paragraph style={{ width: 320 }} rows={3} />
        </Notification>
    </>);
}

export default NotificationUnderDevelopment;