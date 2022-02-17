describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should not add server if server name is blank', function () {
    serverNameInput.value = ''
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(0);
  });

  it('should add server Alice and give her no earnings', function () {
    submitServerInfo();
    updateServerTable()

    const serverTd = document.querySelectorAll('#serverTable td')

    expect(serverTd.length).toEqual(2);
    expect(serverTd[0].innerText).toEqual('Alice');
    expect(serverTd[1].innerText).toEqual('$0.00');
    
  });


  afterEach(function() {
    let serverTableRows = document.querySelector('tbody')
    serverTableRows.innerHTML = ''
    allServers = []
    serverNameInput.value = ''
  });
});
