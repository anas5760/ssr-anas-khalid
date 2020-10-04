export function todosApi(http) {
  return {
    all: () => {
      return http.get('/launches?limit=100');
    },
    filter: (launch_success, land_success, launch_year) => {
      let filter = '';
      if (launch_success) {
        filter += `&launch_success=${launch_success}`;
      }
      if (land_success) {
        filter += `&land_success=${land_success}`;
      }
      if (launch_year) {
        filter += `&launch_year=${launch_year}`;
      }
      return http.get(`/launches?limit=100${filter}`);
    },
    create: newTodo => {
      return http.post('/api/todos', newTodo);
    }
  };
}
