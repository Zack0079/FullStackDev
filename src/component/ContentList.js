import React, { useState } from "react";

const ContentList = () => {
  const [content, setContent] = useState([
    { id: 1, title: "Content 1", status: "Draft" },
    { id: 2, title: "Content 2", status: "Published" },
  ]);

  return (
    <div>
      <h3>Content List</h3>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {content.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContentList;