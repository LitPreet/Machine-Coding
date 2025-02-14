import { RoleTreeInterface } from "../utils/data";

export const useTraverseTree = () => {

    const insertNode = function ({ tree, folderId, item, isFolder }: { tree: RoleTreeInterface, folderId: string, item: string, isFolder: boolean }): RoleTreeInterface {
        if (tree.id === folderId && tree.isFolder) {
            tree.items.unshift({
                id: new Date().getTime() + '',
                name: item,
                isFolder: isFolder,
                items: []
            });
            return tree;
        } else {
            const updatedItems = tree.items.map((obj) => {
                return insertNode({ tree: obj, folderId, item, isFolder });
            });
            return { ...tree, items: updatedItems };
        }
    };

    return { insertNode };
};
