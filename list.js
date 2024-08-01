console.clear();

function list(val, next=null)
{
    this.val=val;
    this.next=next;
}

let head = null;

function addNode(val)
{
    if(head===null)
        head = new list(val);
    else
    {
        let currentNode = new list(val);

        t = head;

        while(t.next!==null)
            t = t.next;

        t.next = currentNode;
    }
}

function printList()
{
    if(head===null)
        console.log("No items to show");
    else
    {
        t = head;

        while(t!==null)
        {
            console.log(t.val);
            t = t.next;
        }
    }
}

function removeAtEnd()
{
    if(head===null)
        console.log('Empty list');
    else if(head.next===null)
        head = null;
    else
    {
        let t = head;
        while(t.next.next!==null)
            t = t.next;
        t.next = null;
    }
}

function removeAtFirst()
{
    if(head===null)
        console.log("Empty list");
    else if(head.next===null)
        head = null;
    else
    {
        head = head.next;
    }
}

function removeAfter(val)
{
    if(head===null)
        console.log("Empty list");
    else if(head.next===null && head.val===val)
        head = null;
    else if(head.next===null && head.val!==val)
        console.log("Value not found");
    else
    {
        let t = head;

        do
        {
            if(t.val===val)
            {
                console.log(`${t.next.val} has removed`);
                t.next = t.next.next;
                break;
            }
            t = t.next;
        }while(t.next!==null);
    }
}

addNode(10);
addNode(20);
addNode(30);
addNode(40);
addNode(50);
// removeAtEnd();
// removeAtFirst();
// removeAfter(30);
printList();

