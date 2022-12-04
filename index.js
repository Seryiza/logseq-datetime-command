function formatNumber(num) {
  return (num >= 10) ? num : `0${num}`;
}

function formatShortDate(date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = formatNumber(date.getDate());
  const hours = formatNumber(date.getHours());
  const minutes = formatNumber(date.getMinutes());
  return `${year}-${month}-${day}, ${hours}:${minutes}. `;
}

function main () {
  logseq.Editor.registerSlashCommand(
    'dt',
    async () => {
      const formattedToday = formatShortDate(new Date())
      logseq.Editor.insertAtEditingCursor(formattedToday);
    },
  )
}

// bootstrap
logseq.ready(main).catch(console.error)
