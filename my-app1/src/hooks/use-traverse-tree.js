const useTraverseTree = () => {
    const insertNode = function (tree, folderId, item, isFolder) {
      // Log the tree object to understand its structure
      console.log('Tree object:', tree);
  
      // Check if tree is a valid object and has the necessary properties
      if (!tree || typeof tree !== 'object' || !('items' in tree)) {
        console.error('Tree is invalid:', tree);
        throw new Error('Invalid tree structure');
      }
  
      // Ensure tree.items is always an array
      const items = Array.isArray(tree.items) ? tree.items : [];
  
      // If the current node matches the folderId and is a folder, insert the new node
      if (tree.id === folderId && tree.isFolder) {
        items.unshift({
          id: new Date().getTime(),
          name: item,
          isFolder: isFolder,
          items: []
        });
  
        return { ...tree, items };
      }
  
      // Recursively process the items array
      const latestNode = items.map((ob) => insertNode(ob, folderId, item, isFolder));
  
      // Return the updated tree with modified items
      return { ...tree, items: latestNode };
    };
  
    return { insertNode };
  };
  
  export default useTraverseTree;
  