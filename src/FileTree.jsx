import React, { useState } from "react";
import "./files.css";
function FileTree({ folders, level = 0 }) {
  const [showFolders, setShowFolders] = useState(false);

  function toggleFolders() {
    setShowFolders(!showFolders);
  }

  const isParentNode = folders.child && folders.child.length > 0;
  const paddingLeft = `${level * 20}px`;
  return (
    <div>
      <>
        <div
          className={`tree-node ${isParentNode ? "parent-node" : ""}`}
          onClick={isParentNode ? toggleFolders : null}
          style={{ paddingLeft }}
        >
          <div className="folder-icon">{showFolders ? "-" : "+"}</div>
          <div className="folder-name">{folders.fileName}</div>
        </div>

        {isParentNode && showFolders && (
          <div className="children-container">
            {folders.child.map((folder) => (
              <FileTree
                folders={folder}
                level={level + 1}
                key={folder.fileName}
              />
            ))}
          </div>
        )}
      </>
    </div>
  );
}

export default FileTree;
