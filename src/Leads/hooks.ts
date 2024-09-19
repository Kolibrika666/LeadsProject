export const todayDate = new Date().toLocaleDateString("ru", { timeZone: "UTC" });

export function taskDate(closest_task_at: number) {
  const date = new Date(closest_task_at * 1000);
  const today = new Date();
  const tomorrow = new Date();
  const yesterday = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  yesterday.setDate(yesterday.getDate() - 1);

  const dateRu = date.toLocaleDateString("ru", { timeZone: "UTC" });
  const todayRu = today.toLocaleDateString("ru", { timeZone: "UTC" });
  const tomorrowRu = tomorrow.toLocaleDateString("ru", { timeZone: "UTC" });
  const yesterdayRu = yesterday.toLocaleDateString("ru", { timeZone: "UTC" });

  let statusTask = "";
  let colorTask = "";

  if (todayRu == dateRu) {
    statusTask = "Сегодня";
    colorTask = "green";
  } else if (tomorrowRu == dateRu) {
    statusTask = "Завтра";
    colorTask = "yellow";
  } else if (yesterdayRu == dateRu) {
    statusTask = "Вчера";
    colorTask = "red";
  } else {
    statusTask = dateRu;
    colorTask = "gray";
  }

  return {
    dateTask: dateRu,
    statusTask: statusTask,
    statusColor: colorTask,
  };
}

export function colorTask (closest_task_at: number) {
  const date = new Date(closest_task_at * 1000);
  const today = new Date();
  const tomorrow = new Date();
  const yesterday = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  yesterday.setDate(yesterday.getDate() - 1);

  const dateRu = date.toLocaleDateString("ru", { timeZone: "UTC" });
  const todayRu = today.toLocaleDateString("ru", { timeZone: "UTC" });
  const tomorrowRu = tomorrow.toLocaleDateString("ru", { timeZone: "UTC" });
  const yesterdayRu = yesterday.toLocaleDateString("ru", { timeZone: "UTC" });

  let colorTask = "";

  if (todayRu == dateRu) {
    colorTask = "green";
  } else if (tomorrowRu == dateRu) {
    colorTask = "yellow";
  } else if (yesterdayRu == dateRu) {
    colorTask = "red";
  } else {
    colorTask = "gray";
  }

  return colorTask;
}
