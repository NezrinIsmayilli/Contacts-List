import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Modal } from 'antd';
import { toast } from 'react-toastify';
const { confirm } = Modal;

export const deleteModal = (id, dispatch) => {
    confirm({
        title: 'Are you sure delete this contact?',
        icon: <ExclamationCircleOutlined />,
        content: '',
        okText: 'Yes',
        okType: 'danger',
        cancelText: 'No',

        onOk() {
            dispatch({
                type: 'remove_user',
                id: id,
            });
            toast.success('Contact Deleted!', {
                position: toast.POSITION.TOP_RIGHT,
            });
        },
    });
};
