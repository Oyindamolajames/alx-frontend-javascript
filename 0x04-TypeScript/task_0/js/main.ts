interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  const studentA: Student = {
    firstName: 'James',
    lastName: 'Ogunsanya',
    age: 26,
    location: 'Abuja'
  };
  
  const studentB: Student = {
    firstName: 'Tom',
    lastName: 'Joy',
    age: 23,
    location: 'Lagos'
  };
  
  const studentsList: Student[] = [studentA, studentB];
  
  function createTable(): void {
    const tableElement: HTMLTableElement = document.createElement('table');
    const headerRow: HTMLTableRowElement = document.createElement('tr');
    const headers: string[] = ['First Name', 'Location'];
    
    headers.forEach((header: string) => {
      const th: HTMLTableCellElement = document.createElement('th');
      th.textContent = header;
      headerRow.appendChild(th);
    });
    tableElement.appendChild(headerRow);
  
    studentsList.forEach((student: Student) => {
      const row: HTMLTableRowElement = document.createElement('tr');
      const values: string[] = [student.firstName, student.location];
      values.forEach((value: string) => {
        const td: HTMLTableCellElement = document.createElement('td');
        td.textContent = value;
        row.appendChild(td);
      });
      tableElement.appendChild(row);
    });
  
    document.body.appendChild(tableElement);
  }
  
  window.onload = createTable;
