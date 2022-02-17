describe("Servers test (with setup and tear-down)", () => {
  beforeEach(() => {
    document.getElementById('serverName').value = 'Mary'
  })

  it('adds server name to allServers object', () => {
    submitServerInfo()
    expect(Object.keys(allServers).length).toEqual(1)
  })

  it('will not add name to allServers object', () => {
    document.getElementById('serverName').value = ''
    submitServerInfo()
    expect(Object.keys(allServers).length).toEqual(0)
  })

  it('updates serverTbody with name of server', () => {
    submitServerInfo()
    updateServerTable()

    const serverTds = document.querySelectorAll('#serverTable tbody td')
    expect(Object.keys(serverTds).length).toEqual(2)
    expect(serverTds[0].innerHTML).toEqual('Mary')
    expect(serverTds[1].innerHTML).toEqual('$0.00')
  })
  

  afterEach(() => {
    let tBody = document.querySelector('#serverTable tbody')
    tBody.innerHTML = ''
    allServers = {}
    serverId = 0
    document.getElementById('serverName').value = ''
  })
});
