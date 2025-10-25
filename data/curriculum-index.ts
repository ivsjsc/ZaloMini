// Lightweight index that provides dynamic loaders for curriculum categories.
export const loaders = {
  kindergarten: () => import('./curriculum-kindergarten').then(m => m.curriculumData || m.default),
  primary: () => import('./curriculum-primary').then(m => m.curriculumData || m.default),
  secondary: () => import('./curriculum-secondary').then(m => m.curriculumData || m.default),
  highschool: () => import('./curriculum-highschool').then(m => m.curriculumData || m.default),
  // NOTE: intentionally omitted an `all` loader that imports `./curriculum` here.
  // Loading the entire curriculum at once will bundle all per-book data into a
  // single large chunk. To keep initial payload small, import individual
  // category/level files on-demand via the category loaders above.
};

export default loaders;
