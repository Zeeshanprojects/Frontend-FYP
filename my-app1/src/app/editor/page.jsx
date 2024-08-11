"use client";
import React, { useState, useEffect, useCallback } from "react";

import axios from "axios";
import MonacoEditor from "react-monaco-editor";
import styles from "./editor.module.css";

import useTraverseTree from "@/hooks/use-traverse-tree";
import { Header1 } from "@/header/page";
import { useSelector } from "react-redux";

// const FileSystem = ({ explorerData, handleInsertNode, handleFileClick }) => {
//   const renderTree = (node) => (
//     <div key={node.id} style={{ marginLeft: 20 }}>
//       {node.isFolder ? (
//         <>
//           <div onClick={() => handleInsertNode(node.id, null, !node.isFolder)}>
//             📁 {node.name}
//           </div>
//           {node.items.map((child) => renderTree(child))}
//         </>
//       ) : (
//         <div
//           onClick={() => handleFileClick(node)}
//           style={{ cursor: "pointer" }}
//         >
//           📄 {node.name}
//         </div>
//       )}
//     </div>
//   );

//   return <div>{renderTree(explorerData)}</div>;
// };

const FileSystem = ({ explorerData, handleInsertNode, handleFileClick }) => {
  const renderTree = (node) => (
    <div key={node.id} className="">
      {node.isFolder ? (
        <>
          <div
            onClick={() => handleInsertNode(node.id, null, !node.isFolder)}
            className="flex items-center cursor-pointer text-foreground hover:text-primary transition-colors duration-200"
          >
            <span className="mr-2">📁</span>
            <span className="font-semibold">{node.name}</span>
          </div>
          <div className="ml-4">
            {node.items.map((child) => renderTree(child))}
          </div>
        </>
      ) : (
        <div
          onClick={() => handleFileClick(node)}
          className="flex items-center cursor-pointer text-muted-foreground hover:text-primary transition-colors duration-200"
        >
          <span className="mr-2">📄</span>
          <span>{node.name}</span>
        </div>
      )}
    </div>
  );

  return <div className="">{renderTree(explorerData)}</div>;
};

// const FeatureList = ({ features, onSelectFeatures }) => {
//   const [selectedFeatures, setSelectedFeatures] = useState({});

//   const toggleFeature = (featureId, key) => {
//     setSelectedFeatures((prevSelected) => {
//       const featureKeys = prevSelected[featureId] || [];
//       const isSelected = featureKeys.includes(key);
//       const newFeatureKeys = isSelected
//         ? featureKeys.filter((k) => k !== key)
//         : [...featureKeys, key];

//       const updatedSelectedFeatures = {
//         ...prevSelected,
//         [featureId]: newFeatureKeys,
//       };

//       onSelectFeatures(updatedSelectedFeatures);
//       return updatedSelectedFeatures;
//     });
//   };

//   return (
//     <div>
//       <h2>Features</h2>
//       <ul>
//         {features.map((feature) => (
//           <li key={feature.id}>
//             <div>{feature.name}</div>
//             {typeof feature.code === "object" ? (
//               <ul>
//                 {Object.keys(feature.code).map((key) => (
//                   <li key={key}>
//                     <input
//                       type="checkbox"
//                       checked={
//                         selectedFeatures[feature.id]?.includes(key) || false
//                       }
//                       onChange={() => toggleFeature(feature.id, key)}
//                     />
//                     {key}
//                   </li>
//                 ))}
//               </ul>
//             ) : (
//               <input
//                 type="checkbox"
//                 checked={
//                   selectedFeatures[feature.id]?.includes("code") || false
//                 }
//                 onChange={() => toggleFeature(feature.id, "code")}
//               />
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

const FeatureList = ({ features, onSelectFeatures }) => {
  const [selectedFeatures, setSelectedFeatures] = useState({});

  const toggleFeature = (featureId, key) => {
    setSelectedFeatures((prevSelected) => {
      const featureKeys = prevSelected[featureId] || [];
      const isSelected = featureKeys.includes(key);
      const newFeatureKeys = isSelected
        ? featureKeys.filter((k) => k !== key)
        : [...featureKeys, key];

      const updatedSelectedFeatures = {
        ...prevSelected,
        [featureId]: newFeatureKeys,
      };

      onSelectFeatures(updatedSelectedFeatures);
      return updatedSelectedFeatures;
    });
  };

  return (
    <div className="">
      <h2 className="text-xl font-bold mb-4">Features</h2>
      <ul className="space-y-4">
        {features.map((feature) => (
          <li
            key={feature.id}
            className="p-2 rounded-lg bg-background shadow-sm border border-border"
          >
            <div className="text-lg font-semibold mb-2">{feature.name}</div>
            {typeof feature.code === "object" ? (
              <ul className="space-y-2">
                {Object.keys(feature.code).map((key) => (
                  <li key={key} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      className="form-checkbox text-primary focus:ring-primary"
                      checked={
                        selectedFeatures[feature.id]?.includes(key) || false
                      }
                      onChange={() => toggleFeature(feature.id, key)}
                    />
                    <span className="text-muted-foreground">{key}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="form-checkbox text-primary focus:ring-primary"
                  checked={
                    selectedFeatures[feature.id]?.includes("code") || false
                  }
                  onChange={() => toggleFeature(feature.id, "code")}
                />
                <span className="text-muted-foreground">Code</span>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

const CodeEditor = ({ code = "" }) => {
  const editorDidMount = (editor, monaco) => {
    console.log("editorDidMount", editor);
  };

  return (
    <div>
      <h2>Code Editor</h2>
      <MonacoEditor
        height="80vh"
        language="javascript"
        theme="vs-dark"
        value={code}
        options={{
          selectOnLineNumbers: true,
        }}
        editorDidMount={editorDidMount}
      />
    </div>
  );
};

function Editor() {
  const [features, setFeatures] = useState([]);
  const [downloadPath, setDownloadPath] = useState("");
  const [explorerData, setExplorerData] = useState({
    id: "1",
    name: "server",
    isFolder: true,
    items: [
      { id: "2", name: "routes", isFolder: true, items: [] },
      { id: "3", name: "models", isFolder: true, items: [] },
      { id: "4", name: "helpers", isFolder: true, items: [] },
      { id: "5", name: "index.js", isFolder: false, items: [] },
      { id: "6", name: "README.md", isFolder: false, items: [] },
    ],
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFeatures, setSelectedFeatures] = useState([]);

  const { allFeatures } = useSelector((state) => state.features);

  // use all features here when needed :)

  const { insertNode } = useTraverseTree();

  useEffect(() => {
    if (allFeatures && allFeatures.length > 0) {
      
      console.log("allFeatures------>", allFeatures);

      function updateIds(array) {
        return array.map((item, index) => ({
          ...item,
          id: index + 1, // Assign a new unique id based on the index
        }));
      }
      setFeatures(updateIds(allFeatures));
      console.log(updateIds(allFeatures));
    } else {
      axios
        .get("http://localhost:3002/features")
        .then((response) => setFeatures(response.data))
        .catch((error) => console.error("Error fetching features:", error));
    }
  }, [allFeatures]);
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3002/features")
  //     .then((response) => setFeatures(response.data))
  //     .catch((error) => console.error("Error fetching features:", error));
  // }, []);

  const handleSelectFeatures = useCallback(
    (selectedFeatures) => {
      // Initialize a new copy of explorerData
      const newExplorerData = {
        id: "1",
        name: "server",
        isFolder: true,
        items: [
          { id: "2", name: "routes", isFolder: true, items: [] },
          { id: "3", name: "models", isFolder: true, items: [] },
          { id: "4", name: "helpers", isFolder: true, items: [] },
          { id: "5", name: "index.js", isFolder: false, items: [] },
          { id: "6", name: "README.md", isFolder: false, items: [] },
        ],
      };

      // Loop through selectedFeatures to update explorerData
      Object.entries(selectedFeatures).forEach(([featureId, keys]) => {
        const feature = features.find((f) => f.id === parseInt(featureId));
        if (feature) {
          if (typeof feature.code === "object") {
            // Handle nested features
            Object.keys(feature.code).forEach((key) => {
              if (keys.includes(key)) {
                const routeFile = {
                  id: `${featureId}_${key}`,
                  name: `${feature.name
                    .toLowerCase()
                    .replace(/\s+/g, "_")}_${key}.js`,
                  isFolder: false,
                  items: [],
                  code: feature.code[key],
                };
                newExplorerData.items[0].items.push(routeFile);

                const modelFile = {
                  id: `${featureId}_${key}_model`,
                  name: `${feature.name
                    .toLowerCase()
                    .replace(/\s+/g, "_")}_${key}_model.js`,
                  isFolder: false,
                  items: [],
                  code: feature.schema,
                };
                newExplorerData.items[1].items.push(modelFile);
              } else {
                // Remove route file if not selected
                const routeIndex = newExplorerData.items[0].items.findIndex(
                  (file) => file.id === `${featureId}_${key}`
                );
                if (routeIndex !== -1) {
                  newExplorerData.items[0].items.splice(routeIndex, 1);
                }

                // Remove model file if not selected
                const modelIndex = newExplorerData.items[1].items.findIndex(
                  (file) => file.id === `${featureId}_${key}_model`
                );
                if (modelIndex !== -1) {
                  newExplorerData.items[1].items.splice(modelIndex, 1);
                }
              }
            });
          } else if (keys.includes("code")) {
            // Handle non-nested feature with 'code'
            const routeFile = {
              id: `${featureId}_code`,
              name: `${feature.name.toLowerCase().replace(/\s+/g, "_")}.js`,
              isFolder: false,
              items: [],
              code: feature.code,
            };
            newExplorerData.items[0].items.push(routeFile);

            // Always add model file if schema exists
            const modelFile = {
              id: `${featureId}_code_model`,
              name: `${feature.name
                .toLowerCase()
                .replace(/\s+/g, "_")}_model.js`,
              isFolder: false,
              items: [],
              code: feature.schema,
            };
            newExplorerData.items[1].items.push(modelFile);
          } else {
            // Remove route file if 'code' is not selected
            const routeIndex = newExplorerData.items[0].items.findIndex(
              (file) => file.id === `${featureId}_code`
            );
            if (routeIndex !== -1) {
              newExplorerData.items[0].items.splice(routeIndex, 1);
            }

            // Remove model file if 'code' is not selected
            const modelIndex = newExplorerData.items[1].items.findIndex(
              (file) => file.id === `${featureId}_code_model`
            );
            if (modelIndex !== -1) {
              newExplorerData.items[1].items.splice(modelIndex, 1);
            }
          }
        }
      });

      // Update state with the new explorerData
      setExplorerData(newExplorerData);

      // Update selectedFeatures state to reflect the actual selection
      setSelectedFeatures(
        Object.entries(selectedFeatures).map(([featureId, keys]) => ({
          id: parseInt(featureId),
          keys,
        }))
      );
    },
    [features]
  );

  const handleFileClick = (file) => {
    setSelectedFile(file);
  };

  const handleGenerateProject = () => {
    axios
      .post("http://localhost:3002/generate", { selectedFeatures })
      .then((response) => {
        alert(response.data.message);
        setDownloadPath(response.data.downloadPath);
      })
      .catch((error) => console.error("Error generating project:", error));
  };

  const handleDownloadProject = () => {
    window.location.href = "http://localhost:3002/download";
  };
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="flex flex-col w-[25%] border-r bg-background p-4 overflow-y-auto">
        <FileSystem
          explorerData={explorerData}
          handleInsertNode={insertNode}
          handleFileClick={handleFileClick}
        />
      </div>

      <div className="flex-1 p-4 overflow-y-auto">
        <div className="h-full overflow-y-auto rounded-lg bg-background p-4 shadow">
          <CodeEditor code={selectedFile?.code || ""} />
        </div>
      </div>

      <div className="flex flex-col w-[20%] border-l bg-background p-4 overflow-y-auto">
        <button
          onClick={handleGenerateProject}
          className="mb-4 w-full rounded-lg bg-primary text-primary-foreground p-2"
        >
          Generate Project
        </button>
        {downloadPath && (
          <button
            onClick={handleDownloadProject}
            className="mb-2 w-full rounded-lg bg-secondary text-secondary-foreground p-2"
          >
            Download Project
          </button>
        )}
        <FeatureList
          features={features}
          onSelectFeatures={handleSelectFeatures}
        />
      </div>
    </div>
  );

  // return (
  //   // <div className="editorWraper">
  //   //   <div className="ls">
  //   //     <div className="fileSystem">
  //   //       <FileSystem
  //   //         explorerData={explorerData}
  //   //         handleInsertNode={insertNode}
  //   //         handleFileClick={handleFileClick}
  //   //       />
  //   //     </div>
  //   //     <div className="editor">
  //   //       <CodeEditor code={selectedFile?.code || ""} />
  //   //     </div>
  //   //   </div>
  //   //   <div className="rs ">
  //   //     <FeatureList
  //   //       features={features}
  //   //       onSelectFeatures={handleSelectFeatures}
  //   //     />
  //   //     <button onClick={handleGenerateProject}>Generate Project</button>

  //   //     {downloadPath && (
  //   //       <button onClick={handleDownloadProject}>Download Project</button>
  //   //     )}
  //   //   </div>
  //   // </div>
  //   <div className="flex h-screen w-screen">
  //     <div className="flex flex-col w-[25%] border-r bg-background p-4">
  //       <div className="overflow-y-auto">
  //         <FileSystem
  //           explorerData={explorerData}
  //           handleInsertNode={insertNode}
  //           handleFileClick={handleFileClick}
  //         />
  //       </div>
  //     </div>

  //     <div className="flex-1 p-4">
  //       <div className="h-full overflow-y-auto rounded-lg bg-background p-4 shadow">
  //         <CodeEditor code={selectedFile?.code || ""} />
  //       </div>
  //     </div>

  //     <div className="flex flex-col w-[20%] border-l bg-background p-4">
  //       <FeatureList
  //         features={features}
  //         onSelectFeatures={handleSelectFeatures}
  //       />
  //       <button
  //         onClick={handleGenerateProject}
  //         className="mt-4 w-full rounded-lg bg-primary text-primary-foreground p-2"
  //       >
  //         Generate Project
  //       </button>
  //       {downloadPath && (
  //         <button
  //           onClick={handleDownloadProject}
  //           className="mt-2 w-full rounded-lg bg-secondary text-secondary-foreground p-2"
  //         >
  //           Download Project
  //         </button>
  //       )}
  //     </div>
  //   </div>
  // );
}

export default Editor;
