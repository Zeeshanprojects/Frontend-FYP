"use client";
import React, { useState, useEffect, useCallback } from "react";

import axios from "axios";
import MonacoEditor from "react-monaco-editor";
import styles from './editor.module.css'

import useTraverseTree from "@/hooks/use-traverse-tree";
import { Header1 } from "@/header/page";

const FileSystem = ({ explorerData, handleInsertNode, handleFileClick }) => {
  const renderTree = (node) => (
    <div key={node.id} style={{ marginLeft: 20 }}>
      {node.isFolder ? (
        <>
          <div onClick={() => handleInsertNode(node.id, null, !node.isFolder)}>
            📁 {node.name}
          </div>
          {node.items.map((child) => renderTree(child))}
        </>
      ) : (
        <div onClick={() => handleFileClick(node)} style={{ cursor: "pointer" }}>
          📄 {node.name}
        </div>
      )}
    </div>
  );

  return <div>{renderTree(explorerData)}</div>;
};

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
    
    <div>
    
      <h2>Features</h2>
      <ul>
        {features.map((feature) => (
          <li key={feature.id}>
            <div>{feature.name}</div>
            {typeof feature.code === "object" ? (
              <ul>
                {Object.keys(feature.code).map((key) => (
                  <li key={key}>
                    <input
                      type="checkbox"
                      checked={selectedFeatures[feature.id]?.includes(key) || false}
                      onChange={() => toggleFeature(feature.id, key)}
                    />
                    {key}
                  </li>
                ))}
              </ul>
            ) : (
              <input
                type="checkbox"
                checked={selectedFeatures[feature.id]?.includes("code") || false}
                onChange={() => toggleFeature(feature.id, "code")}
              />
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

  const { insertNode } = useTraverseTree();

  useEffect(() => {
    axios
      .get("http://localhost:3002/features")
      .then((response) => setFeatures(response.data))
      .catch((error) => console.error("Error fetching features:", error));
  }, []);

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
          if (typeof feature.code === 'object') {
            // Handle nested features
            Object.keys(feature.code).forEach((key) => {
              if (keys.includes(key)) {
                const routeFile = {
                  id: `${featureId}_${key}`,
                  name: `${feature.name.toLowerCase().replace(/\s+/g, '_')}_${key}.js`,
                  isFolder: false,
                  items: [],
                  code: feature.code[key],
                };
                newExplorerData.items[0].items.push(routeFile);
  
                const modelFile = {
                  id: `${featureId}_${key}_model`,
                  name: `${feature.name.toLowerCase().replace(/\s+/g, '_')}_${key}_model.js`,
                  isFolder: false,
                  items: [],
                  code: feature.schema,
                };
                newExplorerData.items[1].items.push(modelFile);
              } else {
                // Remove route file if not selected
                const routeIndex = newExplorerData.items[0].items.findIndex(file => file.id === `${featureId}_${key}`);
                if (routeIndex !== -1) {
                  newExplorerData.items[0].items.splice(routeIndex, 1);
                }
  
                // Remove model file if not selected
                const modelIndex = newExplorerData.items[1].items.findIndex(file => file.id === `${featureId}_${key}_model`);
                if (modelIndex !== -1) {
                  newExplorerData.items[1].items.splice(modelIndex, 1);
                }
              }
            });
          } else if (keys.includes('code')) {
            // Handle non-nested feature with 'code'
            const routeFile = {
              id: `${featureId}_code`,
              name: `${feature.name.toLowerCase().replace(/\s+/g, '_')}.js`,
              isFolder: false,
              items: [],
              code: feature.code,
            };
            newExplorerData.items[0].items.push(routeFile);
  
            // Always add model file if schema exists
            const modelFile = {
              id: `${featureId}_code_model`,
              name: `${feature.name.toLowerCase().replace(/\s+/g, '_')}_model.js`,
              isFolder: false,
              items: [],
              code: feature.schema,
            };
            newExplorerData.items[1].items.push(modelFile);
          } else {
            // Remove route file if 'code' is not selected
            const routeIndex = newExplorerData.items[0].items.findIndex(file => file.id === `${featureId}_code`);
            if (routeIndex !== -1) {
              newExplorerData.items[0].items.splice(routeIndex, 1);
            }
  
            // Remove model file if 'code' is not selected
            const modelIndex = newExplorerData.items[1].items.findIndex(file => file.id === `${featureId}_code_model`);
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
    
    <div className="editor flex">
  <div className="ls flex flex-1">
    <FileSystem
      explorerData={explorerData}
      handleInsertNode={insertNode}
      handleFileClick={handleFileClick}
    />
    <div className="flex-1">
      <CodeEditor code={selectedFile?.code || ""} />
    </div>
  </div>
  <div className="rs flex flex-col items-center">
    <FeatureList
      features={features}
      onSelectFeatures={handleSelectFeatures}
    />
    <button onClick={handleGenerateProject}>Generate Project</button>

    {downloadPath && (
      <button onClick={handleDownloadProject}>Download Project</button>
    )}
  </div>
</div>
  );
}

export default Editor;  