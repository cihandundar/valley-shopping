import { Button, Popconfirm, Table, message } from "antd";
import { useCallback, useEffect, useState } from "react";
const CategoryPage = () => {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);

  const columns = [
    {
      title: "Avatar",
      dataIndex: "avatar",
      key: "avatar",
      render: (imgSrc) => (
        <img
          src={imgSrc}
          alt="Avatar"
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
          }}
        />
      ),
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Actions",
      dataIndex: "Actions",
      key: "actions",
      render: (_, record) => (
        <Popconfirm
          title="Kullanıcıyı Sil"
          description="Kullanıcıyı silmek istediğinizden emin misiniz?"
          okText="Yes"
          cancelText="No"
          onConfirm={() => deleteUser(record.email)}
        >
          <Button type="primary" danger>
            Delete
          </Button>
        </Popconfirm>
      ),
    },
  ];

  const fetchUsers = useCallback(async () => {
    setLoading(true);

    try {
      const response = await fetch(`http://localhost:5000/api/users`);

      if (response.ok) {
        const data = await response.json();
        setDataSource(data);
      } else {
        message.error("Giriş başarısız.");
      }
    } catch (error) {
      console.log("Giriş hatası:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  const deleteUser = async (userEmail) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/users/${userEmail}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        message.success("Kullanıcı başarıyla silindi.");
        fetchUsers();
      } else {
        message.error("Silme işlemi başarısız.");
      }
    } catch (error) {
      console.log("Silme hatası:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      rowKey={(record) => record._id}
      loading={loading}
    />
  );
};

export default CategoryPage;
