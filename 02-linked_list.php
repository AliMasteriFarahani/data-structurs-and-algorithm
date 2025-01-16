<?php
class Node
{
    public $head;
    public $tail;
    public function __construct($head, $tail)
    {
        $this->head = $head;
        $this->tail = $tail;
    }
}
class LinkedList
{
    public $head;
    public $tail;
    public function __construct()
    {
        $this->head = null;
        $this->tail = null;
    }
    public function append($value)
    {
        $newElement = new Node($value,null);
        if($this->head == null){
            $this->head = $newElement ;
            $this->tail = $newElement;
        }
    }
}

