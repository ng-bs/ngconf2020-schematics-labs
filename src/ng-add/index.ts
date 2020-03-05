import { Rule, SchematicContext, Tree } from "@angular-devkit/schematics";

export function addLibrary(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    _context.logger.log("info", "TODO: add magic to ng-add");
    return tree;
  };
}
