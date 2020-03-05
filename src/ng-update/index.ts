import { Rule, SchematicContext, Tree } from "@angular-devkit/schematics";

export function updateLibrary(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    _context.logger.log("info", "TODO: add magic to ng-update");
    return tree;
  };
}
